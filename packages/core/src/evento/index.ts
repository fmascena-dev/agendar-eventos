import Evento from './model/Evento';
import Convidado from './model/Convidado';

import complementarConvidado from './functions/complementarConvidado';
import complementarEventos from './functions/complementarEventos';
import criarConvidadoVazio from './functions/criarConvidadoVazio';
import criarEventoVazio from './functions/criarEventoVazio';

export type { Evento, Convidado };
export {
  complementarConvidado,
  complementarEventos,
  criarConvidadoVazio,
  criarEventoVazio,
};
