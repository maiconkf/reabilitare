import QuiropraxiaLancamentoPage, {
  metadata as quiroMetadata,
} from "./quiropraxia-lancamento/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...quiroMetadata,
  alternates: {
    canonical: "/",
  },
  openGraph: quiroMetadata.openGraph
    ? {
        ...quiroMetadata.openGraph,
        url: "https://quiropraxia.clinicareabilitare.com",
      }
    : undefined,
};

export default QuiropraxiaLancamentoPage;
