/**
 * (C) 2017 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.
 */
package com.dharbor.industrialsecurity.bootsptrap;


import com.dharbor.industrialsecurity.model.*;
import com.dharbor.industrialsecurity.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private SubCategoryRepository subCategoryRepository;
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private PositionRepository positionRepository;
    @Autowired
    private ContractRepository contractRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        initData();
    }

    private void initData() {

        Category eppCategory = new Category();
        eppCategory.setName("Personal Protection Equipment");
        eppCategory.setCode("EPP");

        // EPP category
        Category resourceCategory = new Category();
        resourceCategory.setCode("RES");
        resourceCategory.setName("RESOURCE");

        // safety subcategory
        SubCategory safetySubCategory = new SubCategory();
        safetySubCategory.setCategory(eppCategory);
        safetySubCategory.setCode("SAF");
        safetySubCategory.setName("SAFETY");

        HashSet<SubCategory> subCategoryHashSet = new HashSet<>();
        subCategoryHashSet.add(safetySubCategory);

        eppCategory.setSubCategory(subCategoryHashSet);
        categoryRepository.save(eppCategory);
        categoryRepository.save(resourceCategory);
        subCategoryRepository.save(safetySubCategory);

        // raw material subcategory
        SubCategory rawMaterialSubCategory = new SubCategory();
        rawMaterialSubCategory.setCategory(resourceCategory);
        rawMaterialSubCategory.setCode("RM");
        rawMaterialSubCategory.setName("RAW MATERIAL");

        subCategoryRepository.save(rawMaterialSubCategory);


        // Helmet Item
        Item helmet = new Item();
        helmet.setCode("HEL");
        helmet.setName("HELMET");
        helmet.setSubCategory(safetySubCategory);
        helmet.setFeatured(false);
        helmet.setImage("/assets/images/helmet.jpg");
        helmet.setCategory(helmet.getSubCategory().getCategory().getName());
        helmet.setLabel("ultra safe");
        helmet.setPrice("75.50");
        helmet.setDescription("Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros");
        itemRepository.save(helmet);

        // ink Item
        Item ink = new Item();
        ink.setCode("INK");
        ink.setName("INK");
        ink.setSubCategory(rawMaterialSubCategory);
        ink.setFeatured(true);
        ink.setImage("/assets/images/ink.jpg");
        ink.setCategory(ink.getSubCategory().getCategory().getName());
        ink.setLabel("for better writting");
        ink.setPrice("35.99");
        ink.setDescription("Tinta de primera para cartas importantes");
        itemRepository.save(ink);

        // Audio protector Item
        Item audio = new Item();
        audio.setCode("AUP");
        audio.setName("Audio protector");
        audio.setSubCategory(safetySubCategory);
        audio.setFeatured(false);
        audio.setImage("/assets/images/audio.jpg");
        audio.setCategory(audio.getSubCategory().getCategory().getName());
        audio.setLabel("noise filter");
        audio.setPrice("12.90");
        audio.setDescription("Protege de ruidos auditivos por encima de los decibeles considerados aceptables");
        itemRepository.save(audio);

        // glasses Item
        Item glasses = new Item();
        glasses.setCode("GLA");
        glasses.setName("Glasses");
        glasses.setSubCategory(safetySubCategory);
        glasses.setFeatured(false);
        glasses.setImage("/assets/images/glasses.jpg");
        glasses.setCategory(glasses.getSubCategory().getCategory().getName());
        glasses.setLabel("New technology");
        glasses.setPrice("75.29");
        glasses.setDescription("Permite filtrar rayos ultravioleta, material anti rayas, anti caidas");
        itemRepository.save(glasses);

        // gloves Item
        Item gloves = new Item();
        gloves.setCode("GLO");
        gloves.setName("Gloves");
        gloves.setSubCategory(safetySubCategory);
        gloves.setFeatured(false);
        gloves.setImage("/assets/images/gloves.jpg");
        gloves.setCategory(gloves.getSubCategory().getCategory().getName());
        gloves.setLabel("extra dryer");
        gloves.setPrice("5.69");
        gloves.setDescription("Hechos de algodón con goma antideslizante, especial para industria química.");
        itemRepository.save(gloves);

        // Comments

        Comment comment = new Comment();
        comment.setRating(5);
        comment.setComment("Imagine all safety PPE in SSI!");
        comment.setAuthor("Mr T");
        comment.setDate(fromISO8601UTC("2012-10-16T17:57:28.556094Z"));
        comment.setItem(helmet);
        commentRepository.save(comment);

        Comment comment2 = new Comment();
        comment2.setRating(4);
        comment2.setComment("Gives me a lot of confort, I wish I could get my mother-in-law to have it!");
        comment2.setAuthor("Tania Barrancos");
        comment2.setDate(fromISO8601UTC("2014-09-05T17:57:28.556094Z"));
        comment2.setItem(helmet);
        commentRepository.save(comment2);

        Comment comment3 = new Comment();
        comment3.setRating(3);
        comment3.setComment("Use it, just use it!");
        comment3.setAuthor("Michael Rodriguez");
        comment3.setDate(fromISO8601UTC("2015-02-13T17:57:28.556094Z"));
        comment3.setItem(helmet);
        commentRepository.save(comment3);

        Comment comment4 = new Comment();
        comment4.setRating(4);
        comment4.setComment("Ultimate, Reaching for the stars!");
        comment4.setAuthor("Diana Cardozo");
        comment4.setDate(fromISO8601UTC("2013-12-02T17:57:28.556094Z"));
        comment4.setItem(helmet);
        commentRepository.save(comment4);

        Comment comment5 = new Comment();
        comment5.setRating(2);
        comment5.setComment("It is simply very nice!");
        comment5.setAuthor("50 Cent");
        comment5.setDate(fromISO8601UTC("2011-12-02T17:57:28.556094Z"));
        comment5.setItem(helmet);
        commentRepository.save(comment5);

        // Comments

        comment = new Comment();
        comment.setRating(5);
        comment.setComment("Imagine all safety PPE in SSI!");
        comment.setAuthor("Mr T");
        comment.setDate(fromISO8601UTC("2012-10-16T17:57:28.556094Z"));
        comment.setItem(ink);
        commentRepository.save(comment);

        comment2 = new Comment();
        comment2.setRating(4);
        comment2.setComment("Gives me a lot of confort, I wish I could get my mother-in-law to have it!");
        comment2.setAuthor("Tania Barrancos");
        comment2.setDate(fromISO8601UTC("2014-09-05T17:57:28.556094Z"));
        comment2.setItem(ink);
        commentRepository.save(comment2);

        comment3 = new Comment();
        comment3.setRating(3);
        comment3.setComment("Use it, just use it!");
        comment3.setAuthor("Michael Rodriguez");
        comment3.setDate(fromISO8601UTC("2015-02-13T17:57:28.556094Z"));
        comment3.setItem(ink);
        commentRepository.save(comment3);

        comment4 = new Comment();
        comment4.setRating(4);
        comment4.setComment("Ultimate, Reaching for the stars!");
        comment4.setAuthor("Diana Cardozo");
        comment4.setDate(fromISO8601UTC("2013-12-02T17:57:28.556094Z"));
        comment4.setItem(ink);
        commentRepository.save(comment4);

        comment5 = new Comment();
        comment5.setRating(2);
        comment5.setComment("It is simply very nice!");
        comment5.setAuthor("50 Cent");
        comment5.setDate(fromISO8601UTC("2011-12-02T17:57:28.556094Z"));
        comment5.setItem(ink);
        commentRepository.save(comment5);

        // Comments

        comment = new Comment();
        comment.setRating(5);
        comment.setComment("Imagine all safety PPE in SSI!");
        comment.setAuthor("Mr T");
        comment.setDate(fromISO8601UTC("2012-10-16T17:57:28.556094Z"));
        comment.setItem(audio);
        commentRepository.save(comment);

        comment2 = new Comment();
        comment2.setRating(4);
        comment2.setComment("Gives me a lot of confort, I wish I could get my mother-in-law to have it!");
        comment2.setAuthor("Tania Barrancos");
        comment2.setDate(fromISO8601UTC("2014-09-05T17:57:28.556094Z"));
        comment2.setItem(audio);
        commentRepository.save(comment2);

        comment3 = new Comment();
        comment3.setRating(3);
        comment3.setComment("Use it, just use it!");
        comment3.setAuthor("Michael Rodriguez");
        comment3.setDate(fromISO8601UTC("2015-02-13T17:57:28.556094Z"));
        comment3.setItem(audio);
        commentRepository.save(comment3);

        comment4 = new Comment();
        comment4.setRating(4);
        comment4.setComment("Ultimate, Reaching for the stars!");
        comment4.setAuthor("Diana Cardozo");
        comment4.setDate(fromISO8601UTC("2013-12-02T17:57:28.556094Z"));
        comment4.setItem(audio);
        commentRepository.save(comment4);

        comment5 = new Comment();
        comment5.setRating(2);
        comment5.setComment("It is simply very nice!");
        comment5.setAuthor("50 Cent");
        comment5.setDate(fromISO8601UTC("2011-12-02T17:57:28.556094Z"));
        comment5.setItem(audio);
        commentRepository.save(comment5);

        // Comments

        comment = new Comment();
        comment.setRating(5);
        comment.setComment("Imagine all safety PPE in SSI!");
        comment.setAuthor("Mr T");
        comment.setDate(fromISO8601UTC("2012-10-16T17:57:28.556094Z"));
        comment.setItem(glasses);
        commentRepository.save(comment);

        comment2 = new Comment();
        comment2.setRating(4);
        comment2.setComment("Gives me a lot of confort, I wish I could get my mother-in-law to have it!");
        comment2.setAuthor("Tania Barrancos");
        comment2.setDate(fromISO8601UTC("2014-09-05T17:57:28.556094Z"));
        comment2.setItem(glasses);
        commentRepository.save(comment2);

        comment3 = new Comment();
        comment3.setRating(3);
        comment3.setComment("Use it, just use it!");
        comment3.setAuthor("Michael Rodriguez");
        comment3.setDate(fromISO8601UTC("2015-02-13T17:57:28.556094Z"));
        comment3.setItem(glasses);
        commentRepository.save(comment3);

        comment4 = new Comment();
        comment4.setRating(4);
        comment4.setComment("Ultimate, Reaching for the stars!");
        comment4.setAuthor("Diana Cardozo");
        comment4.setDate(fromISO8601UTC("2013-12-02T17:57:28.556094Z"));
        comment4.setItem(glasses);
        commentRepository.save(comment4);

        comment5 = new Comment();
        comment5.setRating(2);
        comment5.setComment("It is simply very nice!");
        comment5.setAuthor("50 Cent");
        comment5.setDate(fromISO8601UTC("2011-12-02T17:57:28.556094Z"));
        comment5.setItem(glasses);
        commentRepository.save(comment5);

        // Comments

        comment = new Comment();
        comment.setRating(5);
        comment.setComment("Imagine all safety PPE in SSI!");
        comment.setAuthor("Mr T");
        comment.setDate(fromISO8601UTC("2012-10-16T17:57:28.556094Z"));
        comment.setItem(gloves);
        commentRepository.save(comment);

        comment2 = new Comment();
        comment2.setRating(4);
        comment2.setComment("Gives me a lot of confort, I wish I could get my mother-in-law to have it!");
        comment2.setAuthor("Tania Barrancos");
        comment2.setDate(fromISO8601UTC("2014-09-05T17:57:28.556094Z"));
        comment2.setItem(gloves);
        commentRepository.save(comment2);

        comment3 = new Comment();
        comment3.setRating(3);
        comment3.setComment("Use it, just use it!");
        comment3.setAuthor("Michael Rodriguez");
        comment3.setDate(fromISO8601UTC("2015-02-13T17:57:28.556094Z"));
        comment3.setItem(gloves);
        commentRepository.save(comment3);

        comment4 = new Comment();
        comment4.setRating(4);
        comment4.setComment("Ultimate, Reaching for the stars!");
        comment4.setAuthor("Diana Cardozo");
        comment4.setDate(fromISO8601UTC("2013-12-02T17:57:28.556094Z"));
        comment4.setItem(gloves);
        commentRepository.save(comment4);

        comment5 = new Comment();
        comment5.setRating(2);
        comment5.setComment("It is simply very nice!");
        comment5.setAuthor("50 Cent");
        comment5.setDate(fromISO8601UTC("2011-12-02T17:57:28.556094Z"));
        comment5.setItem(gloves);
        commentRepository.save(comment5);

        // Valentin Employee
        Employee valentin = new Employee();
        valentin.setFirstName("Valentin");
        valentin.setLastName("Laime");
        valentin.setImage("/assets/images/valentin.jpg");
        valentin.setJobCode("CEO");
        valentin.setFeatured(true);
        valentin.setJobDescription("El CEO, esta encargado de dirigir la empresa para conseguir los objetivos alineados con las estrategias de la empresa. Su rol fundamental es marcar las estrategias a seguir cuidando que los indicadores relacionados se cumplan y de ser necesario proponer nuevas estrategias que permitan a la empresa adaptarse al mercado.");

        // Anabel Employee
        Employee anabel = new Employee();
        anabel.setFirstName("Anabel");
        anabel.setLastName("Angus");
        anabel.setImage("/assets/images/anabel.jpg");
        anabel.setJobCode("CTO");
        anabel.setJobDescription("El CTO, tiene la function de garantizar la calidad de los productos de software cuidando que los recursos utiliados sean adecuados en terminos de tiempo, costo y recurso, de manera que la satisfaccion del cliente este asegurada.");

        // Jlaw Employee
        Employee jlaw = new Employee();
        jlaw.setFirstName("Jennifer");
        jlaw.setLastName("Lawrence");
        jlaw.setImage("/assets/images/jlaw.jpg");
        jlaw.setJobCode("CTO");
        jlaw.setJobDescription("Tiene la function de dirigir los projectos de software garantizando que se utilice adecuadamente la major tecnologia disponible, y tambien debe garantizar la calidad de todo el equipo del projecto");

        // MIla Employee
        Employee mila = new Employee();
        mila.setFirstName("Maria");
        mila.setLastName("Dupleich");
        mila.setImage("/assets/images/mila.jpg");
        mila.setJobCode("CTO");
        mila.setJobDescription("Tiene la function de dirigir los projectos de software garantizando que se utilice adecuadamente la major tecnologia disponible, y tambien debe garantizar la calidad de todo el equipo del projecto");

        // Kylie Employee
        Employee kylie = new Employee();
        kylie.setFirstName("Kylie");
        kylie.setLastName("Kross");
        kylie.setImage("/assets/images/kylie.jpg");
        kylie.setJobCode("EC");
        kylie.setJobDescription("Debe garantizar que la experiencia del usuario al estar frente al priducto de software sea loa mas agradable possible, cuidando que la usabilidad del producto sea maximizada, debe diseñar los flujos proponiendo nuevos procesos que agilicen los actuals antes de la implementacion de las nuevas funcionalidades.");

        // Position
        Position position = new Position();
        position.setName("Software Lead");
        positionRepository.save(position);

        Position position2 = new Position();
        position2.setName("Executive User Experience Chef");
        positionRepository.save(position2);

        Position position3 = new Position();
        position3.setName("Chief Technology Officer");
        positionRepository.save(position3);

        // contract
        Contract contract = new Contract();
        contract.setEmployee(valentin);
        Calendar contracInitDate = Calendar.getInstance();
        contracInitDate.set(2010, Calendar.JANUARY, 1);
        contract.setInitDate(contracInitDate.getTime());
        contract.setPosition(position3);
        valentin.getContracts().add(contract);
        employeeRepository.save(valentin);
        contractRepository.save(contract);

        Contract contract2 = new Contract();
        contract2.setEmployee(anabel);
        Calendar contracInitDate2 = Calendar.getInstance();
        contracInitDate2.set(2011, Calendar.JULY, 1);
        contract2.setInitDate(contracInitDate2.getTime());
        contract2.setPosition(position);
        anabel.getContracts().add(contract2);
        employeeRepository.save(anabel);
        contractRepository.save(contract2);

        Contract contract3 = new Contract();
        contract3.setEmployee(jlaw);
        Calendar contracInitDate3 = Calendar.getInstance();
        contracInitDate3.set(2016, Calendar.MARCH, 1);
        contract3.setInitDate(contracInitDate3.getTime());
        contract3.setPosition(position2);
        jlaw.getContracts().add(contract3);
        employeeRepository.save(jlaw);
        contractRepository.save(contract3);

        Contract contract4 = new Contract();
        contract4.setEmployee(mila);
        Calendar contracInitDate4 = Calendar.getInstance();
        contracInitDate4.set(2014, Calendar.MAY, 11);
        contract4.setInitDate(contracInitDate4.getTime());
        contract4.setPosition(position);
        mila.getContracts().add(contract4);
        employeeRepository.save(mila);
        contractRepository.save(contract4);

        Contract contract5 = new Contract();
        contract5.setEmployee(kylie);
        Calendar contracInitDate5 = Calendar.getInstance();
        contracInitDate5.set(2017, Calendar.FEBRUARY, 28);
        contract5.setInitDate(contracInitDate5.getTime());
        contract5.setPosition(position);
        kylie.getContracts().add(contract5);
        employeeRepository.save(kylie);
        contractRepository.save(contract5);

    }

    private static Date fromISO8601UTC(String dateStr) {
        TimeZone tz = TimeZone.getTimeZone("UTC");
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.s'Z'");
        df.setTimeZone(tz);

        try {
            return df.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return null;
    }
}
