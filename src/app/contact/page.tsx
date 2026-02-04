import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
      <Header />
      <ContactForm />
      <div className="w-full h-px bg-[var(--l-border-subtle)]" />
      <Footer />
    </main>
  );
}
