export default class Address {
    
    _street: string = '';
    _number: number;
    _city: string = '';
    _state: string = '';
    _zip: string = '';

    constructor(street: string, city: string, state: string, zip: string, number: number) {
        this._street = street;
        this._city = city;
        this._state = state;
        this._zip = zip;
        this._number = number

        this.validate()
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error('Street is required')
        }
        if (this._number === 0) {
            throw new Error('Number is required')
        }
        if (this._city.length === 0) {
            throw new Error('City is required')
        }
        if (this._zip.length === 0) {
            throw new Error('Zip is required')
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip}, ${this._city}`
    }

}