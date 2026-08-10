import AppLayout from "../components/layout/AppLayout";

// ComingSoonPage : placeholder pour les routes pas encore développées.
// `title` est fourni par App.jsx lors de la définition de la route.
function ComingSoonPage({ title }) {
  return (
    <AppLayout pageTitle={title}>
      <div className="coming-soon">
        <p>Cette section est en cours de construction 🚧</p>
      </div>
    </AppLayout>
  );
}

export default ComingSoonPage;