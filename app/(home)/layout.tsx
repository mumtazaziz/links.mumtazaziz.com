import NextLink from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  description: "Hit me up on my links or check out mumtazaziz.com.",
};

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="container mx-auto my-12 px-6 md:flex md:gap-4">
      <div className="w-full">
        <div className="sticky top-12 mb-8 md:mb-0">
          <h1 className="mb-4 text-4xl font-medium">Hit me up on...</h1>
          <p className="text-secondary">
            or check out{" "}
            <NextLink
              href="https://www.mumtazaziz.com"
              className="underline decoration-1 underline-offset-4 hover:text-black hover:decoration-2 hover:dark:text-white"
            >
              mumtazaziz.com
            </NextLink>
          </p>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </main>
  );
}
