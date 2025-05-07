import { PageProps } from "$fresh/server.ts";

export default function DynamicRoutes(props:PageProps) {
    return (
        <div>
            <h1>Dynamic Routes</h1>
            <p>The user ID is: {id}</p>
        </div>
    );
}