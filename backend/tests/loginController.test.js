
// Prueba con JEST si el mensaje ok al login es exitoso
test("El mensaje de exito debe contener 'exitoso'", () => {
    const response = {
        message: "login exitoso",
};
        expect(response.message).toMatch(/exitoso/);
    
});

// Prueba con JEST si el email recibido como username es correcto (toMatch) o no (not.toMatch) 
test("Username debe tener formato email", () => {
    const username = "ejemplo@ejemplo.com";
    expect(username).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

test("Username sin @ no es valido", () => {
    const username = "ejemplo.com";
    expect(username).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
);
});
test("Username sin dominio '.com' .es'... No es válido", ()=>{
    const username = "ejemolo@";
    expect(username).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
)
});