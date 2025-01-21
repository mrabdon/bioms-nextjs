export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["admin"],
  "/producer(.*)": ["producer"],
  "/staff(.*)": ["staff"],
  "/list/users": ["admin", "producer"],
  "/list/volumes": ["admin", "producer", "staff"],
  "/list/reports": ["admin", "producer", "staff"],
  "/list/forms": ["admin", "producer"],
  "/list/activityLog": ["admin"],
};
