import { Outlet, useRouteLoaderData } from '@remix-run/react'
import { loader } from '~/root'
import { isRouteErrorResponse, useRouteError } from '@remix-run/react'
import ErrorBoundaryPage from '~/common-components/errorpage'

export default function MainLayout() {
  const config = useRouteLoaderData<typeof loader>('root')

  return (
    <>
      <Outlet context={config?.ENV} />
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return <ErrorBoundaryPage statusCode={error.status} statusText={error.statusText} />
  } else if (error instanceof Error) {
    return <ErrorBoundaryPage statusText={error.message} />
  } else {
    return <ErrorBoundaryPage statusCode={500} statusText={'Unknown Error'} />
  }
}
