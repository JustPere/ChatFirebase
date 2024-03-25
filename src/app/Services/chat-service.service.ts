// chat-service.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentReceiverId = new BehaviorSubject<string>(null);
  private selectedConversationSubject = new BehaviorSubject<string>(null);
  selectedConversation$ = this.selectedConversationSubject.asObservable();
  senderId: any;
  receiverId: any;
  conversationId:any;

  selectedUserMessages$: any;
  allMessages: any;
  nameOtherUser: any;

  constructor(
    private fb: AngularFireDatabase,
    private userService: UserServiceService
  ) {

  }


  sendMessage(conversationId: string, text: string): Promise<void> {
    const message = {
      sender: this.senderId,
      text,
      timestamp: new Date().getTime()
    };

    return this.fb.list(`conversations/${conversationId}/messages`).push(message)
      .then(() => undefined); // Convertir ThenableReference a Promise<void>
  }



  getConversationId():void {
    console.log('metodo para obtener el id de conversacion, al final no se usa porque he puesto el id fijo ya que solo habra una conversacion');

    this.userService.selectedUser$.subscribe(user => {
      console.log('user', user);
      this.senderId =  user
    });
    this.userService.otherUser$.subscribe(user => {
      console.log('user', user);
      this.nameOtherUser = user
      this.receiverId =  user
    });

      
    const conversationKey = ['PruebaTecnica'].sort().join('_');
    console.log('Conversation Key service:', conversationKey);
    const conversationRef = this.fb.object<string>(`conversations/${conversationKey}`);

    conversationRef.valueChanges().pipe(
      map(conversationId => {
        console.log('Existing Conversation ID:', conversationId);
        this.allMessages = conversationId;
        console.log('this.allMessages',this.allMessages);
          
        this.conversationId = conversationKey;
        console.log('conversationKey',conversationKey);
        
        if (!conversationId) {
          console.log('Creating a new conversation...');
          conversationId = this.createConversation();
          console.log('New Conversation ID:', conversationId);
          conversationRef.set(conversationId);
        }

       // this.selectedConversationSubject.next(conversationId);
      })
    ).subscribe();
  }

  private createConversation(): string {
    // Lógica para crear una nueva conversación en Firebase Realtime Database en caso de que no exista 
    const conversationId = this.fb.createPushId();
    console.log('Generated Conversation ID:', conversationId);

    const conversationData = {
      // Otros campos de la conversación según tus necesidades
    };

    this.fb.object(`conversations/PruebaTecnica`).set(conversationData);

    return conversationId;
  }

  getConversationMessages(): Observable<any[]> {
    //metodo para obtener mensajes, con variable fija para obtener siempre la misma
    return this.fb.list(`conversations/PruebaTecnica/messages`).valueChanges();
  }

  
  
}
