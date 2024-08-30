export class Book {
    public id = 0;
    public title: string = '';
    public description: string = '';
    public author: string = '';
    public isbn: string = '';
    public date: Date | undefined;
    public address = new BookAddress();
    public versions: BookVersion[] = [];

    public setDescriptionToDefault() {
        this.description = 'Default';
    }
}

export class BookAddress {
    public street = '';
    public city = '';
}

export class BookVersion {
    public version = '';
    public date: Date | undefined;
}