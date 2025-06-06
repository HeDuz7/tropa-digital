import './globals.css';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Tropa Digital - Teste Frontend',
  description: 'Teste Frontend para Tropa Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
