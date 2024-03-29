import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from '@/components/dashboard/page'
import { DataTableDemo } from '../_components/data-table'

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Contratos</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <DataTableDemo></DataTableDemo>
      </DashboardPageMain>
    </DashboardPage>
  )
}
