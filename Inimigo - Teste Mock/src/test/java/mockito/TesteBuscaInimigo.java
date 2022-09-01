package mockito;

import src.main.java.BuscaInimigo;
import Inimigo;
import InimigoService;
import InimigoConst;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class TesteBuscaInimigo {

    @Mock
    private InimigoService service;
    private BuscaInimigo buscaInimigo;

    @Before
    public void setup(){
        buscaInimigo = new BuscaInimigo(service);
    }

    @Test
    public void testeBuscaInimigoSkeleton(){
        Mockito.when(service.busca(10)).thenReturn(InimigoConst.SKELETON);

        Inimigo inexistente = buscaInimigo.buscaInimigo(10);

        assertEquals("Inexistente", skeleton.getNome());
        assertEquals(0, skeleton.getQtdVida(), 0.1);
        assertEquals("Inexistente", skeleton.getArma());
}
