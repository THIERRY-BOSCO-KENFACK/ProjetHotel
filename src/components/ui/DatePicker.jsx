import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
const MONTH_NAMES = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

// Formate une Date en "YYYY-MM-DD" manuellement (plutôt que toISOString,
// qui convertit en UTC et peut décaler le jour selon le fuseau horaire).
function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// DatePicker : sélecteur de date avec calendrier déroulant.
// `value` : date sélectionnée au format ISO ("YYYY-MM-DD") ou vide.
// `onChange` : appelé avec la nouvelle date au format ISO.
// `label`/`id` : mêmes conventions que Input/Select.
function DatePicker({ label, id, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedDate = value ? new Date(`${value}T00:00:00`) : null;
  const [viewDate, setViewDate] = useState(selectedDate ?? new Date());

  // Ferme le calendrier au clic en dehors du composant — nécessaire car
  // c'est un popover custom, pas une vraie modale avec overlay dédié.
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // getDay() : 0=dimanche...6=samedi → converti pour démarrer la semaine un lundi.
  const startWeekday = (new Date(year, month, 1).getDay() + 6) % 7;

  const days = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isSelectedDay = (day) =>
    selectedDate &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === month &&
    selectedDate.getFullYear() === year;

  const handleSelectDay = (day) => {
    onChange(toISODate(new Date(year, month, day)));
    setIsOpen(false);
  };

  const displayValue = selectedDate
    ? selectedDate.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
    : "Sélectionner une date";

  return (
    <div className="input-group" ref={containerRef}>
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}

      <div className="date-picker">
        <button
          type="button"
          id={id}
          className="date-picker__trigger"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Calendar size={16} />
          <span>{displayValue}</span>
        </button>

        {isOpen && (
          <div className="date-picker__popover" role="dialog" aria-label="Choisir une date">
            <div className="date-picker__header">
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month - 1, 1))}
                aria-label="Mois précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="date-picker__month-label">
                {MONTH_NAMES[month]} {year}
              </span>
              <button
                type="button"
                onClick={() => setViewDate(new Date(year, month + 1, 1))}
                aria-label="Mois suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="date-picker__weekdays">
              {WEEKDAYS.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="date-picker__days">
              {days.map((day, index) =>
                day === null ? (
                  <span key={`empty-${index}`} />
                ) : (
                  <button
                    type="button"
                    key={day}
                    className={`date-picker__day ${isSelectedDay(day) ? "date-picker__day--selected" : ""}`}
                    onClick={() => handleSelectDay(day)}
                  >
                    {day}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DatePicker;