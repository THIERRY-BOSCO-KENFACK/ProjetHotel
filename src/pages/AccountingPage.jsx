import AppLayout from "../components/layout/AppLayout";
import AccountingView from "../features/accounting/AccountingView";

// AccountingPage : point d'entrée de la route "/comptabilite".
function AccountingPage() {
  return (
    <AppLayout pageTitle="Comptabilité">
      <AccountingView />
    </AppLayout>
  );
}

export default AccountingPage;