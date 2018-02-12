import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'integrations',
    templateUrl: './integrations.component.html',
    styleUrls: [ './integrations.component.css' ]
})
export class IntegrationsComponent implements OnInit{
    token: string;  

    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(queryParams => {
            if (queryParams && queryParams.source == 'spotify'){
                    this.token = queryParams.code;
                }

            // TODO: Check if authorization fails. 
            // https://example.com/callback?error=access_denied&state=STATE
        });
    }

    public connectSpotify(){
        let spotifyUri = 'https://accounts.spotify.com/authorize?';
        let clientId = '36fdb6cef7e54969829637ca90d0fe0d';
        let responseType = 'code';
        let redirectUri = 'http://localhost:5000/integrations?source=spotify';

        window.location.href = spotifyUri +
        'client_id=' + clientId + '&' +
        'response_type=' + responseType + '&' +
        'redirect_uri=' + redirectUri;
    }
}
