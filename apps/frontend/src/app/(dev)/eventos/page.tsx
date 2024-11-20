import { eventos } from '@/core/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5 overflow-hidden">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="
        flex flex-col w-full
        bg-zinc-800 rounded-lg 
        
        "
        >
          <div className="relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover rounded-tr-lg rounded-tl-lg"
            />
          </div>
          <div className="flex-1 flex flex-col items-center p-7 gap-5 text-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
            <div className="flex gap-5 ">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className=" flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/admin/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
