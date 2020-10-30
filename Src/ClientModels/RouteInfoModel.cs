using System.Collections.Generic;

namespace Backend.ClientModels
{
    public class RouteInfo
    {
        public string Path { get; set; }
        public string Title { get; set; }
        public string Icon { get; set; }
        public string Class { get; set; }
        public string Badge { get; set; }
        public string BadgeClass { get; set; }
        public bool IsExternalLink { get; set; }
        public List<RouteInfo> Submenu { get; set; }

        public RouteInfo(){
            Submenu = new List<RouteInfo>();
        }
    }
}