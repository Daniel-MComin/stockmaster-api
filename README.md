S<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Stock Master – Documentação</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body{
      font-family:Arial,Helvetica,sans-serif;
      line-height:1.6;
      margin:0;
      padding:0 1rem;
      border-left:4px solid #1976d2;
      background:#f5f5f5;
    }
    h1,h2,h3{color:#1976d2;}
    code{background:#eee;padding:2px 4px;border-radius:4px;}
    pre{background:#eee;padding:1rem;border-radius:8px;overflow-x:auto;}
    ul{margin-left:1.2rem;}
    a{color:#1976d2;text-decoration:none;}
    a:hover{text-decoration:underline;}
    section{margin-bottom:2rem;background:#fff;padding:1rem;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);} 
    table{width:100%;border-collapse:collapse;margin-bottom:1rem;}
    th,td{border:1px solid #ddd;padding:8px;text-align:left;}
    th{background:#e3f2fd;}
    small{display:block;margin-top:0.5rem;color:#555;}
  </style>
</head>
<body>
<article>
<h1>📦 Stock Master</h1>
<p>Stock Master é um sistema de gerenciamento de estoque desenvolvido com <strong>Angular</strong> no front‑end e <strong>Django Rest Framework</strong> no back‑end. Ele permite cadastrar, controlar e analisar produtos, categorias e movimentações de estoque, garantindo segurança através de autenticação JWT.</p>

<section>
<h2>🚀 Tecnologias</h2>
<h3>Front‑end</h3>
<ul><li>Angular</li><li>Angular Material</li><li>Angular Router</li><li>Formulários Reativos</li></ul>
<h3>Back‑end</h3>
<ul><li>Python • Django • Django Rest Framework</li><li>JWT (JSON Web Tokens)</li><li>SQLite (padrão) ou qualquer banco compatível com Django</li></ul>
</section>

<section>
<h2>🎯 Funcionalidades</h2>
<ul>
<li>Cadastro, edição e exclusão de <strong>produtos</strong></li>
<li>Gerenciamento de <strong>categorias</strong></li>
<li>Histórico de <strong>movimentações de estoque</strong> (entrada/saída)</li>
<li>Autenticação e autorização seguras via JWT</li>
<li>Painel administrativo com <strong>estatísticas em tempo real</strong></li>
</ul>
</section>

<section>
<h2>⚙️ Instalação</h2>
<h3>Pré‑requisitos</h3>
<ul><li><a href="https://nodejs.org/">Node.js</a> &amp; <a href="https://angular.io/cli">Angular CLI</a></li><li>Python&nbsp;3.10+</li><li>Git</li></ul>

<h3>Clone o repositório</h3>
<pre><code>git clone https://github.com/&lt;usuario&gt;/stock-master.git
cd stock-master</code></pre>

<h3>Back‑end</h3>
<pre><code># Crie e ative um ambiente virtual
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r backend/requirements.txt

# Migrações
python manage.py migrate

# Variáveis (exemplo)
export SECRET_KEY="chave‑ultra‑secreta"
export DEBUG=1

# Inicie a API
python manage.py runserver
</code></pre>

<h3>Front‑end</h3>
<pre><code>cd frontend
npm install
ng serve --open</code></pre>
</section>

<section>
<h2>🔑 Autenticação JWT</h2>
<p>Após criar um usuário (<code>/api/auth/register/</code>), obtenha o par de tokens em <code>/api/auth/token/</code>:</p>
<pre><code>{
  "username": "admin",
  "password": "senha"
}</code></pre>
<p>O <strong>access token</strong> deve ser enviado no header <code>Authorization: Bearer &lt;token&gt;</code> em todas as requisições protegidas.</p>
</section>

<section>
<h2>📡 Endpoints Principais</h2>
<table>
<thead><tr><th>Método</th><th>Endpoint</th><th>Descrição</th></tr></thead>
<tbody>
<tr><td>GET</td><td>/api/products/</td><td>Lista produtos</td></tr>
<tr><td>POST</td><td>/api/products/</td><td>Cria produto</td></tr>
<tr><td>GET</td><td>/api/products/{id}/</td><td>Detalhe do produto</td></tr>
<tr><td>PUT/PATCH</td><td>/api/products/{id}/</td><td>Atualiza produto</td></tr>
<tr><td>DELETE</td><td>/api/products/{id}/</td><td>Remove produto</td></tr>
<tr><td>GET</td><td>/api/categories/</td><td>Lista categorias</td></tr>
<tr><td>POST</td><td>/api/stock-movements/</td><td>Registra entrada/saída</td></tr>
</tbody>
</table>
<small>Consulte a <a href="docs/swagger/">documentação Swagger</a> para todos os endpoints.</small>
</section>

<section>
<h2>🗂️ Estrutura de Pastas</h2>
<pre><code>stock-master/
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   └── stock/
│       ├── settings.py
│       ├── urls.py
│       └── apps/...
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── core/
    │   │   ├── modules/
    │   │   └── shared/
    │   └── environments/
    └── angular.json
</code></pre>
</section>

<section>
<h2>🤝 Contribuindo</h2>
<ol>
<li>Fork este repositório</li>
<li>Crie uma branch (<code>git checkout -b feature/minha-feature</code>)</li>
<li>Commit suas mudanças (<code>git commit -m "feat: Minha nova feature"</code>)</li>
<li>Push para a branch (<code>git push origin feature/minha-feature</code>)</li>
<li>Abra um Pull Request</li>
</ol>
</section>

<section>
<h2>📝 Licença</h2>
<p>Distribuído sob a licença MIT. Veja <a href="LICENSE">LICENSE</a> para mais informações.</p>
</section>

<section>
<h2>📬 Contato</h2>
<p>Projeto mantido por <a href="https://github.com/&lt;usuario&gt;">@usuario</a> — sinta‑se livre para abrir <strong>issues</strong> ou enviar feedback!</p>
</section>

</article>
</body>
</html>
