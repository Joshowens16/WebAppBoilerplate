from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_env: str = "development"
    secret_key: str = "your-secret-key-here"
    database_url: str = "sqlite:///./app.db"

    class Config:
        env_file = ".env"


settings = Settings()
