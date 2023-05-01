main() {
  // ==== Numeros
  int a = 10;
  double b = 5.5;

  int? c;

  int _a = 30;
  double $b = 40;

  double resultado = _a + $b;

  // print(resultado);

  // ==== String

  String nombre = 'Tony';
  String nombre2 = "Tony";
  String nombre3 = "O'Connor";
  String apellido = 'Stark';

  String nombreCompleto = '$nombre $apellido';

  String multilinea = '''
  Hola Mundo
  Como estas?
  $nombreCompleto
  O'Connor''';

  // print(multilinea);

  // ==== Booleans
  bool isActive = true;
  bool isNotActive = !isActive;

  // print(isNotActive);

  // ==== Lists
  // List<String> villanosDeprecated = new List();
  List<String> villanos = ['Lex', 'Red Skull', 'Doom'];

  villanos.add('Duende verde');
  villanos.add('Duende verde');
  villanos.add('Duende verde');
  villanos.add('Duende verde');

  // print(villanos);

  var villanosSet = villanos.toSet();
  // print(villanosSet.toList());

  // ==== Sets
  Set<String> villanos2 = {'Lex', 'Red Skull', 'Doom'};
  villanos2.add('Duende verde');
  villanos2.add('Duende verde');
  villanos2.add('Duende verde');

  // print(villanos2);

  // ==== Maps
  Map<int, dynamic> ironman = {
    1: 'Tony Stark',
    2: 'Inteligencia y dinero',
    3: 9000,
  };

  // print(ironman[3]);

  Map<String, dynamic> capitan = new Map();

  capitan.addAll({
    'nombre': 'Steve Roger',
    'poder': 'Super fuerza, super velocidad',
    'nivel': 5000,
  });

  // capitan.addAll(ironman);

  // print(capitan);
}
