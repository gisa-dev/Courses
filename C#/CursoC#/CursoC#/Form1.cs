namespace CursoC_
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int numero = 123;
            double numeroDecimal = 500.18;
            string prueba = "prueba de variable";
            label1.Text = prueba;
        }
    }
}