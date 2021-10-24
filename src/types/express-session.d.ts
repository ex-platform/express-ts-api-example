declare module "express-session" {
  interface SessionData {
    viewCount: number | undefined;
  }
}
