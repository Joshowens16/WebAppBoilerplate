from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_env: str = "development"
    secret_key: str = "your-secret-key-here"

    class Config:
        env_file = ".env"


settings = Settings()
