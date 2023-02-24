import { capitalize } from "../components/testFunction"
import { response } from "../components/testFunction"

describe('funciones del componente Greeting', () => {
    describe('capitalize', () => {
        test('debe retornar string vacio si recibe un string vacio', () => {
            expect(capitalize('')).toBe('');
        });

        test('debe retornar el string capitalizado', () => {
            expect(capitalize('antone')).toBe('Antone');
        });

    describe('response', () => {
        test('debe retornar una respuesta al estado', () => {
            expect(response(1)).toBe('1/5')
        })
    })
    })
})