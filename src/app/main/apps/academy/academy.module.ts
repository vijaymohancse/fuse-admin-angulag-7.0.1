import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import {NgxDocViewerModule} from 'ngx-doc-viewer';


import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { AcademyCoursesComponent } from 'app/main/apps/academy/courses/courses.component';
import { AcademyCourseComponent } from 'app/main/apps/academy/course/course.component';
import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';
import { AcademyCourseService } from 'app/main/apps/academy/course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    {
        path     : 'courses/:courseName',
        component: AcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AcademyCoursesComponent,
        AcademyCourseComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MarkdownModule.forRoot(),
        NgxDocViewerModule,
        

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers   : [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class AcademyModule
{
}
