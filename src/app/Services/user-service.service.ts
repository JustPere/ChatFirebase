import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private currentUser: string = '';
  private secondUser: string = '';

  selectedUserSubject = new BehaviorSubject<any>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();
 
  otherUserSubject = new BehaviorSubject<any>(null);
  otherUser$ = this.otherUserSubject.asObservable();

  setSelectedUser(user): void {
    this.selectedUserSubject.next(user);
  }
  setSelectedOther(user): void {
    this.otherUserSubject.next(user);
  }
  getSelectedUser(): Observable<string> {
    return this.selectedUser$;
  }
  
  confirm(message?: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const isConfirmed = window.confirm(message || '¿Quieres usar el nombre guardado?');
      resolve(isConfirmed);
    });
  }
}
