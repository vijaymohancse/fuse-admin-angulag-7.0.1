import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIConstants } from 'app/api_constants';

@Injectable()
export class AcademyCourseService implements Resolve<any>
{
    onCourseChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onCourseChanged = new BehaviorSubject({});
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        console.log('---route--');
        console.log(route);
        return new Promise((resolve, reject) => {
            
            Promise.all([
                
                this.getCourse(route.params.courseName)
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get course
     *
     * @param courseId
     * @param courseSlug
     * @returns {Promise<any>}
     */
    getCourse(id): Promise<any>
    {
        return new Promise((resolve, reject) => {
            console.log('---id--');
            console.log(id);
            this._httpClient.get(APIConstants.API_ENDPOINT + '/assets/' + id)
                .subscribe((response: any) => {
                    
                    this.onCourseChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

}
