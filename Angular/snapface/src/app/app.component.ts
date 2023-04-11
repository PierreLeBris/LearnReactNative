import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    mySnap!: FaceSnap;
    myOtherSnap!: FaceSnap;
    myLastSnap!: FaceSnap;

    ngOnInit() {
        this.mySnap = new FaceSnap(
            'ArchiTest',
            'Le Giga Poto',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0
        );
        this.myOtherSnap = new FaceSnap(
            'Une Montagne (OURS)',
            'Tema la taille de la montagne',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0
        );
        this.myLastSnap = new FaceSnap(
            'Miam',
            'Tema la taille de la bouffe',
            'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            new Date(),
            0
        );
    }
}