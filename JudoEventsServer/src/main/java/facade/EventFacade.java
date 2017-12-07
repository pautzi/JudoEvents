package facade;

import entity.Event;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by marcelpautz on 20.07.17.
 */
@Stateless
public class EventFacade {
    @PersistenceContext
    private EntityManager em;

    public void create(Event event){em.persist(event);}

    public Event findById(long id) {return em.find(Event.class,id);}

    public List<Event> findAll(){
        List<Event> events = em.createNamedQuery("Event.findAll",Event.class).getResultList();

        return events;
    }

    public List<Event> findAllTournaments(){
        return em.createNamedQuery("Event.findAllTournaments",Event.class).getResultList();
    }

    public Event update(Event event){ return this.em.merge(event);}

    public void delete(long id){
        Event entity = this.em.find(Event.class,id);
        if(entity!=null)
            this.em.remove(entity);
    }
}
