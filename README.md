<body>
<article>
<h1>📦 Stock Master</h1>
<p>Stock Master é um sistema de gerenciamento de estoque desenvolvido com <strong>Angular</strong> no front‑end e <strong>Django Rest Framework</strong> no back‑end. Ele permite cadastrar, controlar e analisar produtos, categorias e movimentações de estoque, garantindo segurança através de autenticação JWT.</p>

<section>
<h2>🚀 Tecnologias</h2>
<h3>Front‑end</h3>
<ul><li>Angular</li><li>Angular Material</li></ul>
<h3>Back‑end</h3>
<ul><li>Python • Django • Django Rest Framework</li><li>JWT (JSON Web Tokens)</li><li>SQLite (banco compatível com Django)</li></ul>
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
<pre><code>{
  "username": "admin",
  "password": "admin"
}</code></pre>
</section>

</article>
</body>
