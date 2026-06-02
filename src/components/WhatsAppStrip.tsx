import { MessageCircle } from 'lucide-react';
import flowerWatermark from '@/assets/flower-watermark.png';

export function WhatsAppStrip() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#fff3cf',
        backgroundImage: `linear-gradient(rgba(255, 243, 207, 0.88), rgba(255, 243, 207, 0.88)), url(${flowerWatermark})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '240px auto',
      }}
    >
      <div className="container-prime flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-foreground font-medium text-center sm:text-left">
          Toque no botão para falar conosco por WhatsApp e tire sua dúvida agora mesmo!
        </p>
        <a
          href="https://wa.me/5573988043664"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap border-2 border-primary"
        >
          <MessageCircle className="w-4 h-4" />
          FALE CONOSCO
        </a>
      </div>
    </section>
  );
}
