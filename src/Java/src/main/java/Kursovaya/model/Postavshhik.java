package Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Поставщик
 */
@Entity(name = "IISKursovayaПоставщик")
@Table(schema = "public", name = "Поставщик")
public class Postavshhik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодПоставщика")
    private Integer кодпоставщика;

    @Column(name = "Поствщик")
    private String поствщик;

    @Column(name = "Телефон")
    private Integer телефон;


    public Postavshhik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодПоставщика() {
      return кодпоставщика;
    }

    public void setКодПоставщика(Integer кодпоставщика) {
      this.кодпоставщика = кодпоставщика;
    }

    public String getПоствщик() {
      return поствщик;
    }

    public void setПоствщик(String поствщик) {
      this.поствщик = поствщик;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }


}