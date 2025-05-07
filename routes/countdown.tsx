import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
            The big event is happening  <Countdown target={date.toISOString()} />.
        </div>
    );
}