import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10 w-full">
      <div className="z-10 w-full md:max-w-8xl items-center content-center justify-between font-mono text-center sm:text-lg text-sm">
        <h1 className="md:text-5xl text-2xl font-bold">Willkommen bei Shelters of Europe</h1>
        <p className="mt-5">
          Willkommen bei der Website zum Shelters of Europe Discord Rollenspiel!<br/><br/>
          Hier findest du alle Informationen, die du brauchst, um in das Rollenspiel einzusteigen.<br/><br/>
          Wenn du neu bist, empfehlen wir dir, zuerst die <Link href='/rules'>Regeln</Link> zu lesen.<br/><br/>
          Du kannst dich aber auch direkt in das <Link href='/setting'>Setting</Link> einlesen, oder erst die <Link href='/character-sheet'>Charaktervorlage</Link> anschauen.<br/><br/>
        </p>
      </div>
    </main>
  );
}
