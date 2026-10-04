import { Breadcrumb, Container } from "@/components";
import { getLegalPageBySlug } from "@/lib/api";
import { stripHtml } from "@/lib";
import { Metadata } from "next";
import moment from "moment";


export async function generateMetadata() {
  const page =  await getLegalPageBySlug("terms-and-conditions");
  if (!page) {
    return {
      title: "",
      description: "",
    };
  }
  return {
    title: page.title,
    description: stripHtml(page.excerpt),
  };
}

const TermsAndConditions = async () => {
  const page = await getLegalPageBySlug("terms-and-conditions");
  if (!page) return <>Page not founed</>;
  return (
    <main>
      <section className="bg-green-lite">
        <Container className="flex flex-col min-h-[50vh] pb-10 justify-end text-white">
          <Breadcrumb
            items={[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Terms and Conditions",
                href: "#",
              },
            ]}
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Terms and Conditions
          </h1>
          <p>Last updated: {moment.utc(page.date).format("MMMM D, YYYY")}</p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div
            className={
              "prose pt-6 font-light leading-relaxed space-y-6 prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:pt-4 prose-h3:text-xl prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed prose-strong:font-semibold"
            }
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </Container>
      </section>
    </main>
  );
};

export default TermsAndConditions;
