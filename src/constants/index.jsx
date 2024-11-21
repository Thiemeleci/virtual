import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Recursos", href: "#" },
  { label: "Fluxo De Trabalho", href: "#" },
  { label: "Preços", href: "#" },
  { label: "Comentários", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Soluções Stellar",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e apresentou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Eu não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e a capacidade de resolução de problemas da equipe foram fundamentais para dar vida à nossa visão",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Foi um prazer trabalhar com essa empresa. Sua atenção aos detalhes e seu compromisso com a excelência são louváveis. Eu os recomendaria muito a qualquer pessoa que esteja procurando um serviço de alto nível.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi um divisor de águas para o nosso projeto. Sua atenção aos detalhes e suas soluções inovadoras nos ajudaram a atingir nossas metas mais rapidamente do que imaginávamos ser possível. Somos gratos por sua experiência e profissionalismo!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrado pela equipe. Eles foram capazes de superar nossas expectativas e fornecer resultados excepcionais.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "A equipe foi muito além para garantir que nosso projeto fosse um sucesso. Sua experiência e dedicação são inigualáveis. Estou ansioso para trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface 'Arrasta E Larga'",
    description:
      "Conceba e organize facilmente os seus ambientes de RV com uma interface de arrastar e largar fácil de utilizar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade Com Várias Plataformas",
    description:
      "Crie aplicações de RV que funcionam perfeitamente em várias plataformas, incluindo dispositivos móveis, computadores e auscultadores de RV.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modelos Incorporados",
    description:
      "Dê um impulso aos seus projectos de RV com uma variedade de modelos incorporados para diferentes tipos de aplicações e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização Em Tempo Real",
    description:
      "Pré-visualize a sua aplicação de RV em tempo real à medida que efetua alterações, permitindo iterações e ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas De Colaboração",
    description:
      "Trabalhe em conjunto com a sua equipa em tempo real em projetos de RV, permitindo uma colaboração perfeita e o compartilhamento de ideias.",
  },
  {
    icon: <GlobeLock />,
    text: "Painel De Controle Analítico",
    description:
      "Obtenha insights valiosos sobre as interações e o comportamento do usuário em seus aplicativos de RV com um painel de análise integrado.",
  },
];

export const checklistItems = [
  {
    title: "Mesclagem De Código Facilitada",
    description:
      "Acompanhe o desempenho de seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Revise O Código Sem Preocupações",
    description:
      "Tenha acesso a ferramentas automatizadas de revisão de código.",
  },
  {
    title: "Assistência De IA Para Reduzir O Tempo",
    description:
      "IA disponível para efetuar quailquer tarefa que lhe for atribuida.",
  },
  {
    title: "Compartilhe O Trabalho Em Minutos",
    description:
      "Crie e compartilhe trabalhos de forma rápida e eficiente.",
  },
];

export const pricingOptions = [
  {
    title: "Grátis",
    price: "R$0",
    features: [
      "Compartilhamento Seguro",
      "5 Gb de Armazenamento",
      "Análise Web",
      "Modo Privado",
    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Compartilhamento Seguro",
      "10 Gb de Armazenamento",
      "Análise Web (Avançado)",
      "Modo Privado",
    ],
  },
  {
    title: "Empresas",
    price: "R$200",
    features: [
      "Compartilhamento Seguro",
      "Armazenamento Ilimitado",
      "Rede De Alto Desempenho",
      "Modo Privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Primeiros passos" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutorial" },
  { href: "#", text: "Referência De API" },
  { href: "#", text: "Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Recursos" },
  { href: "#", text: "Dispositivos Compatíveis" },
  { href: "#", text: "Requisitos Do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas De Lançamento" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Trabalhos" },
];
