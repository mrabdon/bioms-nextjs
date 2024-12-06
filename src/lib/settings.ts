export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["admin"],
  "/demo(.*)": ["admin"],
  "/secretary(.*)": ["secretary"],
  "/companyAdmin(.*)": ["companyAdmin"],
  "/list/biofuels": ["admin", "companyAdmin"],
  "/list/users": ["admin", "companyAdmin"],
  "/list/volumes": ["admin", "producer"],
  "/list/subjects": ["admin", "producer"],
  "/list/forms": ["admin", "producer"],
  "/list/reports": ["admin", "companyAdmin", "secretary"],
  "/list/usermanagement": ["admin", "companyAdmin", "secretary"],
  "/list/usermanagement/invitation": ["admin", "companyAdmin", "secretary"],
  "/list/allusers": ["admin", "companyAdmin", "secretary"],
  "/list/activityLog": ["admin"],
};
