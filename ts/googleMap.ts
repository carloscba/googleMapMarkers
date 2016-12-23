class googleMap {
    
    public key:string;
    private map:any;
    private activeMarkers:any[];
    public bound:boolean = false;

    constructor(key: string, map:any) {
        this.key = key;
        this.map = map;
        this.activeMarkers = [];
    }

    public setCenter(lat:number, lng:number):void{
        let point = new google.maps.LatLng(lat, lng);
        this.map.setCenter(point);
    }

    public zoom(zoom):void{
        this.map.setZoom(zoom);        
    }    

    public addMarker(lat:number, lng:number, data?, callback?):void{
        
        let point = new google.maps.LatLng(lat, lng);

        let marker = new google.maps.Marker({
            position : point,
            title    : (data) ? data.title : "",
            map      : this.map,
            data     : data
        });      

        this.activeMarkers.push(point);

        google.maps.event.addListener(marker, 'click', function(e) {         
            if(data){
                callback(marker);
            }
        });
    }

    public addMarkers(markers){

        markers.data.forEach((marker, index) => {
            this.addMarker(marker.lat, marker.lng, marker, markers.callback);
        }); 

        if(this.bound){
            this.setBound();
        }
    }
    
    private setBound(){
        let bounds = new google.maps.LatLngBounds();
        
        this.activeMarkers.forEach((point, index) => {
            bounds.extend(point);
        });    

        this.map.fitBounds(bounds);        
    }    

}
