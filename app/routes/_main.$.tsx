import { Outlet, useRouteLoaderData } from "@remix-run/react"
import { loader } from "~/root"
import {
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import ErrorBoundaryPage from "~/common-components/errorpage";


export default function MainLayout() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
             <ErrorBoundaryPage statusCode={404} statusText={error.statusText} />
        );
    } else if (error instanceof Error) {
        return (
            <ErrorBoundaryPage statusText={error.message} data={error.stack} />
        );
    } else {
        return (<ErrorBoundaryPage statusCode={404} statusText={"Page Not Found"} />);
    }
}