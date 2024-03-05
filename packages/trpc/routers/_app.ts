import { router } from "../index";
import { adminAppRouter } from "./admin";
import { apiKeysAppRouter } from "./apiKeys";
import { bookmarksAppRouter } from "./bookmarks";
import { listsAppRouter } from "./lists";
import { usersAppRouter } from "./users";
export const appRouter = router({
  bookmarks: bookmarksAppRouter,
  apiKeys: apiKeysAppRouter,
  users: usersAppRouter,
  lists: listsAppRouter,
  admin: adminAppRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;