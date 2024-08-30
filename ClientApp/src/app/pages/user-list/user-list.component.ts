import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { map, of } from 'rxjs';

enum Role {
  admin = 0,
  userAdmin = 1,
  productAdmin = 2,
  supervisor = 3,
  user = 4
}


@Component({
  selector: 'cb-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  Role = Role;
  value = signal(0);

  role = signal<Role>(Role.supervisor);

  isUserAdmin = computed(() => this.role()=== Role.userAdmin);
  isProductAdmin = computed(() => this.role()=== Role.productAdmin);

  isAdmin = computed(() => this.isUserAdmin() && this.isProductAdmin());

  isSupervisor = computed(() => this.role()=== Role.supervisor);
  isUser = computed(() => this.role()=== Role.user);

  user = signal<User>(new User());

  superLongText = 'superLongText superLongText superLongText superLongText superLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongText superLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongTextsuperLongText superLongText superLongText superLongText';

  constructor() {
    this.user.set(new User());

    this.user.update(x => {
      x.firstName = 'Jens';
      x.lastName = 'Kuehlner';
      return x;
    });
  }
}

/**
 * Signal hat setter und getter
 * Signal hat update
 * Signals wird nur aufgerufen, wenn dieser aber geändert ist
 */