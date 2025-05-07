import { PageProps } from "$fresh/server.ts";

export default function DynamicRoutes(props:PageProps) {
    const id = props.params.userID; // Extract the dynamic parameter from the URL
    return (
        <div>
            <h1>Dynamic Routes</h1>
            <p>The user ID is: {id}</p>
        </div>
    );
}