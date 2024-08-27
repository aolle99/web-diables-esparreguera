import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations("Common");
  return (
    <h1>Home</h1>
  );
}


