# WebAppBoilerplate

This is a reusable boilerplate template. Do not build features here — changes should be generic improvements to the template itself.

## Stack
- **Frontend**: TypeScript, React, Tailwind CSS, Vite
- **Backend**: Python, FastAPI, SQLAlchemy, Alembic
- **Database**: Configurable via `DATABASE_URL` env var (defaults to SQLite)

## Project Structure
```
WebAppBoilerplate/
├── frontend/          # Vite + React + TypeScript + Tailwind
│   └── src/
│       ├── pages/     # Route-level components
│       ├── components/# Reusable UI components
│       └── lib/
│           └── api.ts # Axios instance — use this for all API calls
├── backend/           # FastAPI
│   ├── app/
│   │   ├── main.py    # App entry point, CORS, route registration
│   │   ├── config.py  # Typed settings via pydantic-settings
│   │   ├── database.py# SQLAlchemy engine and get_db dependency
│   │   ├── models/    # SQLAlchemy models go here
│   │   └── routes/    # API routes go here
│   └── alembic/       # Database migrations
└── package.json       # Root — runs both servers with concurrently
```

## Running the App
```bash
# From project root (starts both frontend and backend)
npm run dev
```
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API docs: http://localhost:8000/docs

## Using This Template
New projects are created via the "Use this template" button on GitHub. After cloning:

```bash
npm install
cd frontend && npm install
cd ../backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # then edit .env with your database URL
alembic upgrade head
cd .. && npm run dev
```

## Database Options
Set `DATABASE_URL` in `backend/.env`:

```bash
# SQLite (default, no setup needed)
DATABASE_URL=sqlite:///./app.db

# PostgreSQL
DATABASE_URL=postgresql://localhost/dbname

# SQL Server (Windows) — also requires: pip install pyodbc
DATABASE_URL=mssql+pyodbc://user:password@server/dbname?driver=ODBC+Driver+17+for+SQL+Server
```

## Migrations
```bash
cd backend && source venv/bin/activate

# After adding/changing a model
alembic revision --autogenerate -m "description"
alembic upgrade head
```

## Adding a New Model
1. Create `backend/app/models/yourmodel.py` inheriting from `Base`
2. Import it in `backend/app/models/__init__.py`
3. Run `alembic revision --autogenerate -m "add yourmodel"`
4. Run `alembic upgrade head`

## Adding a New Route
1. Create `backend/app/routes/yourroute.py`
2. Register it in `backend/app/main.py` with `app.include_router(...)`

## Adding a New Page
1. Create `frontend/src/pages/YourPage.tsx`
2. Add a `<Route>` in `frontend/src/App.tsx`

## Environment
- Backend env vars in `backend/.env` (see `backend/.env.example`)
- Frontend env vars use `VITE_` prefix (see `frontend/.env.example`)
- In dev, frontend proxies `/api` requests to backend via Vite config
- In production, set `VITE_API_URL` in `frontend/.env` to your backend URL
