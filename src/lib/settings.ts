export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["admin"],
  "/secretary(.*)": ["secretary"],
  "/companyAdmin(.*)": ["companyAdmin"],
  "/list/biofuels": ["admin", "companyAdmin"],
  "/list/users": ["admin", "companyAdmin"],
  "/list/volumes": ["admin", "companyAdmin","secretary"],
  "/list/forms": ["admin", "companyAdmin"],
  "/list/reports": ["admin", "companyAdmin","secretary"],
  "/list/activityLog": ["admin"],

}