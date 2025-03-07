import { Route } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CreatePassComponent } from './create-pass/create-pass.component';
import { ViewPassComponent } from './view-pass/view-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { AllpassesComponent } from './allpasses/allpasses.component';
import { AllticketsComponent } from './alltickets/alltickets.component';

export const bookRoutes: Route[] = [
    {
        path     : 'create_ticket',
        component: CreateTicketComponent,
    },
    {
        path     : 'view_ticket',
        component: ViewTicketComponent,
    },
    {
        path     : 'create_pass',
        component: CreatePassComponent,
    },
    {
        path     : 'view_pass',
        component: ViewPassComponent,
    },
    {
        path     : 'profile',
        component: ProfileComponent,
    },
    {
        path:"notification",
        component: NotificationComponent
    },
    {
        path:"all_passes",
        component: AllpassesComponent
    },
    {
        path:"all_tickets",
        component: AllticketsComponent
    },
  
  
];