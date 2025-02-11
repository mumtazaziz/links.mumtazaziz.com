import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  description: "Hit me up on my profiles or check out mumtazaziz.com.",
};

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="container my-5 h-100">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h1>Hit me up on...</h1>
          <p>
            or check out{" "}
            <Link href="https://www.mumtazaziz.com">mumtazaziz.com</Link>
          </p>
        </div>
        <div className="col-md-6">{children}</div>
      </div>
    </main>
  );
}
