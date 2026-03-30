# Configuração GTM + Google Ads — Sala Secreta (bonadio.site)

---

## 1. Estrutura do Site

| URL | O que é |
|-----|---------|
| `www.bonadio.site/` | Redireciona automaticamente para `/sala-secreta` |
| `www.bonadio.site/sala-secreta` | Landing page principal com formulário |
| `www.bonadio.site/sala-secreta?obrigado=quente` | Página de obrigado — lead quente |
| `www.bonadio.site/sala-secreta?obrigado=morno` | Página de obrigado — lead morno |
| `www.bonadio.site/sala-secreta?obrigado=frio` | Página de obrigado — lead frio |

---

## 2. Identificadores do Formulário

| Elemento | ID |
|----------|----|
| Formulário (`<form>`) | `sala-secreta-form` |
| Campo Nome | `form-field-nome` |
| Campo E-mail | `form-field-email` |
| Campo WhatsApp | `form-field-whatsapp` |
| Campo Atuação | `form-field-atuacao` |
| Campo Cargo | `form-field-cargo` |
| Campo Faturamento | `form-field-faturamento` |
| Campo Urgência | `form-field-urgencia` |

---

## 3. Containers GTM

| Container ID | Tipo | Onde está instalado |
|-------------|------|---------------------|
| `GTM-W98WXF4D` | Server-side (Stape) | `<head>` do `index.html` via `stape.bonadio.site` |
| `G-D5JLH6DX71` | GA4 | Dentro do GTM acima |

---

## 4. Variáveis JavaScript Personalizado

Crie cada uma em **GTM → Variáveis → Nova → JavaScript Personalizado**.

---

### `jsc - email`
```javascript
function() {
  var el = document.querySelector('input#form-field-email');
  if (!el) return '';
  return el.value.trim().toLowerCase();
}
```

---

### `jsc - telefone (GAds)`
```javascript
function formatPhoneNumber() {
  var phoneField = document.querySelector('input#form-field-whatsapp');
  if (!phoneField) return '';
  var phoneNumber = phoneField.value;

  phoneNumber = phoneNumber
    .replace(/\s/g, '')
    .replace(/-/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (phoneNumber.startsWith('0')) {
    phoneNumber = phoneNumber.substring(1);
  }

  if (phoneNumber.startsWith('55') || phoneNumber.startsWith('+55')) {
    phoneNumber = phoneNumber.replace(/^\+?55(0\d+)/, '+55$1');
    if (!phoneNumber.startsWith('+')) {
      phoneNumber = '+' + phoneNumber;
    }
  } else {
    phoneNumber = '+55' + phoneNumber;
  }

  return phoneNumber;
}
```

---

### `jsc - nome`
```javascript
function() {
  var el = document.querySelector('input#form-field-nome');
  if (!el) return '';
  return el.value.trim();
}
```

---

### `jsc - faturamento`
```javascript
function() {
  var el = document.querySelector('select#form-field-faturamento');
  if (!el) return '';
  return el.value;
}
```

---

### `jsc - urgencia`
```javascript
function() {
  var el = document.querySelector('select#form-field-urgencia');
  if (!el) return '';
  return el.value;
}
```

---

## 5. Acionador (Trigger)

Crie em **GTM → Acionadores → Novo**.

| Campo | Valor |
|-------|-------|
| Tipo | Envio de formulário |
| Aguardar tags | Ativado (500ms) |
| Verificar validação | Ativado |
| Condição | Form ID **igual a** `sala-secreta-form` |
| Nome sugerido | `Trigger - Form Submit - Sala Secreta` |

> **Atenção:** "Aguardar tags" garante que os dados de Enhanced Conversions
> sejam enviados antes do redirect para a página de obrigado.

---

## 6. Tag — Conversão Google Ads

Crie em **GTM → Tags → Nova → Google Ads: Conversão**.

| Campo | Valor |
|-------|-------|
| ID de conversão | `AW-18050203580` |
| Rótulo da conversão | *(copie do painel Google Ads → Conversões)* |
| Acionador | `Trigger - Form Submit - Sala Secreta` |
| Nome sugerido | `Tag - GAds - Conversão - Sala Secreta` |

### Enhanced Conversions (dados do usuário)

Dentro da mesma tag, ative **Enhanced Conversions** e mapeie:

| Campo Google Ads | Variável GTM |
|-----------------|--------------|
| Email | `{{jsc - email}}` |
| Phone Number | `{{jsc - telefone (GAds)}}` |
| Name | `{{jsc - nome}}` |

---

## 7. Tag — GA4 Event (opcional, para Analytics)

| Campo | Valor |
|-------|-------|
| Tipo | Google Analytics: Evento GA4 |
| ID de medição | `{{GA4 - ID}}` (já existe como constante) |
| Nome do evento | `generate_lead` |
| Parâmetros | `faturamento` → `{{jsc - faturamento}}` |
| Parâmetros | `urgencia` → `{{jsc - urgencia}}` |
| Acionador | `Trigger - Form Submit - Sala Secreta` |

---

## 8. Fluxo Completo — Do Clique ao Google Ads

```
Usuário preenche o formulário
        ↓
Clica em "QUERO MINHA VAGA"
        ↓
GTM detecta evento de Form Submit em #sala-secreta-form
        ↓
Acionador dispara → Tag GAds executa
        ↓
jsc - email / jsc - telefone / jsc - nome → coletados via querySelector
        ↓
Dados enviados ao Google Ads (Enhanced Conversions)
        ↓
React calcula lead_tier (quente / morno / frio)
        ↓
Dados salvos no Supabase + webhook n8n
        ↓
Redirect para /sala-secreta?obrigado={tier}
```

---

## 9. Como Testar

1. Abra o **Tag Assistant** no Chrome em `www.bonadio.site/sala-secreta`
2. Preencha todos os campos do formulário com dados de teste
3. Clique em enviar
4. No Tag Assistant, clique no evento **Form Submit** na barra esquerda
5. Verifique:
   - Aba **Etiquetas** → `Tag - GAds - Conversão - Sala Secreta` deve aparecer como **Disparada**
   - Aba **Variáveis** → `jsc - email`, `jsc - telefone`, `jsc - nome` devem ter os valores digitados
6. Após o redirect, confirme que caiu na página correta (`?obrigado=quente/morno/frio`)

---

## 10. Checklist Final

- [ ] 5 variáveis `jsc -` criadas no GTM
- [ ] Acionador de Form Submit com condição `Form ID = sala-secreta-form`
- [ ] Tag de Conversão Google Ads com Enhanced Conversions mapeado
- [ ] Container GTM publicado (clicar em **Enviar** no GTM)
- [ ] Testar via Tag Assistant com formulário preenchido
- [ ] Confirmar conversão no painel Google Ads → Conversões (pode levar até 24h)
