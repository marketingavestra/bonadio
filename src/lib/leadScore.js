// ─── Lead Scoring ──────────────────────────────────────────────────────────
// Pontuação máxima: 7 (4 faturamento + 3 urgência)
//
// quente: 5–7 → alta urgência + alto faturamento
// morno:  2–4 → tem dinheiro mas pouca urgência, ou urgente mas caixa menor
// frio:   0–1 → baixo faturamento e/ou sem urgência

const FAT_SCORE = {
  'Ainda não faturo':               0,
  'Até R$ 10.000/mês':              1,
  'De R$ 10.000 a R$ 50.000/mês':  2,
  'De R$ 50.000 a R$ 100.000/mês': 3,
  'Mais de R$ 100.000/mês':        4,
}

const URG_SCORE = {
  'Não é urgente, posso esperar':                  0,
  'Tenho urgência moderada':                       1,
  'É urgente, quero resolver logo':                2,
  'Extremamente urgente, preciso resolver agora':  3,
}

/**
 * Calcula o tier do lead.
 * @param {string} faturamento
 * @param {string} urgencia
 * @returns {'quente' | 'morno' | 'frio'}
 */
export function calcLeadTier(faturamento, urgencia) {
  const fat = FAT_SCORE[faturamento] ?? 0
  const urg = URG_SCORE[urgencia]    ?? 0
  const total = fat + urg

  if (total >= 5) return 'quente'
  if (total >= 2) return 'morno'
  return 'frio'
}
