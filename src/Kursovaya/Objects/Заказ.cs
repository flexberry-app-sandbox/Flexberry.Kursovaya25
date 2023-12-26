﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "КодЗаказа as \'Код заказа\'",
            "НомерЗаказа as \'Номер заказа\'",
            "Дата as \'Дата\'",
            "Доставка as \'Доставка\'",
            "Клиент as \'Клиент\'",
            "Клиент.Фамилия as \'Фамилия\'",
            "Менеджер as \'Менеджер\'",
            "Менеджер.Фамилия as \'Фамилия\'"}, Hidden=new string[] {
            "Клиент.Фамилия",
            "Менеджер.Фамилия"})]
    [AssociatedDetailViewAttribute("ЗаказE", "Товары", "ТоварыE", true, "", "Товары", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ЗаказE", "СостояниеЗаказа", "СостояниеЗаказаE", true, "", "Состояние заказа", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаказE", "Клиент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [MasterViewDefineAttribute("ЗаказE", "Менеджер", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [View("ЗаказL", new string[] {
            "КодЗаказа as \'Код заказа\'",
            "НомерЗаказа as \'Номер заказа\'",
            "Дата as \'Дата\'",
            "Доставка as \'Доставка\'",
            "Клиент.Фамилия as \'Фамилия\'",
            "Менеджер.Фамилия as \'Фамилия\'"})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодЗаказа;
        
        private int fНомерЗаказа;
        
        private System.DateTime fДата;
        
        private IIS.Kursovaya.ТипДоставки fДоставка;
        
        private IIS.Kursovaya.Клиент fКлиент;
        
        private IIS.Kursovaya.Менеджер fМенеджер;
        
        private IIS.Kursovaya.DetailArrayOfСостояниеЗаказа fСостояниеЗаказа;
        
        private IIS.Kursovaya.DetailArrayOfТовары fТовары;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Дата CustomAttributes)

        // *** End programmer edit section *** (Заказ.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Дата Get start)

                // *** End programmer edit section *** (Заказ.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Заказ.Дата Get end)

                // *** End programmer edit section *** (Заказ.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Дата Set start)

                // *** End programmer edit section *** (Заказ.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Заказ.Дата Set end)

                // *** End programmer edit section *** (Заказ.Дата Set end)
            }
        }
        
        /// <summary>
        /// Доставка.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Доставка CustomAttributes)

        // *** End programmer edit section *** (Заказ.Доставка CustomAttributes)
        public virtual IIS.Kursovaya.ТипДоставки Доставка
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Доставка Get start)

                // *** End programmer edit section *** (Заказ.Доставка Get start)
                IIS.Kursovaya.ТипДоставки result = this.fДоставка;
                // *** Start programmer edit section *** (Заказ.Доставка Get end)

                // *** End programmer edit section *** (Заказ.Доставка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Доставка Set start)

                // *** End programmer edit section *** (Заказ.Доставка Set start)
                this.fДоставка = value;
                // *** Start programmer edit section *** (Заказ.Доставка Set end)

                // *** End programmer edit section *** (Заказ.Доставка Set end)
            }
        }
        
        /// <summary>
        /// КодЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.КодЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.КодЗаказа CustomAttributes)
        public virtual int КодЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.КодЗаказа Get start)

                // *** End programmer edit section *** (Заказ.КодЗаказа Get start)
                int result = this.fКодЗаказа;
                // *** Start programmer edit section *** (Заказ.КодЗаказа Get end)

                // *** End programmer edit section *** (Заказ.КодЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.КодЗаказа Set start)

                // *** End programmer edit section *** (Заказ.КодЗаказа Set start)
                this.fКодЗаказа = value;
                // *** Start programmer edit section *** (Заказ.КодЗаказа Set end)

                // *** End programmer edit section *** (Заказ.КодЗаказа Set end)
            }
        }
        
        /// <summary>
        /// НомерЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)
        public virtual int НомерЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get start)
                int result = this.fНомерЗаказа;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set start)
                this.fНомерЗаказа = value;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Клиент CustomAttributes)

        // *** End programmer edit section *** (Заказ.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Клиент Get start)

                // *** End programmer edit section *** (Заказ.Клиент Get start)
                IIS.Kursovaya.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Заказ.Клиент Get end)

                // *** End programmer edit section *** (Заказ.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Клиент Set start)

                // *** End programmer edit section *** (Заказ.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Заказ.Клиент Set end)

                // *** End programmer edit section *** (Заказ.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Менеджер CustomAttributes)

        // *** End programmer edit section *** (Заказ.Менеджер CustomAttributes)
        [PropertyStorage(new string[] {
                "Менеджер"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Менеджер Менеджер
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Менеджер Get start)

                // *** End programmer edit section *** (Заказ.Менеджер Get start)
                IIS.Kursovaya.Менеджер result = this.fМенеджер;
                // *** Start programmer edit section *** (Заказ.Менеджер Get end)

                // *** End programmer edit section *** (Заказ.Менеджер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Менеджер Set start)

                // *** End programmer edit section *** (Заказ.Менеджер Set start)
                this.fМенеджер = value;
                // *** Start programmer edit section *** (Заказ.Менеджер Set end)

                // *** End programmer edit section *** (Заказ.Менеджер Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.СостояниеЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.СостояниеЗаказа CustomAttributes)
        public virtual IIS.Kursovaya.DetailArrayOfСостояниеЗаказа СостояниеЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.СостояниеЗаказа Get start)

                // *** End programmer edit section *** (Заказ.СостояниеЗаказа Get start)
                if ((this.fСостояниеЗаказа == null))
                {
                    this.fСостояниеЗаказа = new IIS.Kursovaya.DetailArrayOfСостояниеЗаказа(this);
                }
                IIS.Kursovaya.DetailArrayOfСостояниеЗаказа result = this.fСостояниеЗаказа;
                // *** Start programmer edit section *** (Заказ.СостояниеЗаказа Get end)

                // *** End programmer edit section *** (Заказ.СостояниеЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.СостояниеЗаказа Set start)

                // *** End programmer edit section *** (Заказ.СостояниеЗаказа Set start)
                this.fСостояниеЗаказа = value;
                // *** Start programmer edit section *** (Заказ.СостояниеЗаказа Set end)

                // *** End programmer edit section *** (Заказ.СостояниеЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Товары CustomAttributes)

        // *** End programmer edit section *** (Заказ.Товары CustomAttributes)
        public virtual IIS.Kursovaya.DetailArrayOfТовары Товары
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Товары Get start)

                // *** End programmer edit section *** (Заказ.Товары Get start)
                if ((this.fТовары == null))
                {
                    this.fТовары = new IIS.Kursovaya.DetailArrayOfТовары(this);
                }
                IIS.Kursovaya.DetailArrayOfТовары result = this.fТовары;
                // *** Start programmer edit section *** (Заказ.Товары Get end)

                // *** End programmer edit section *** (Заказ.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Товары Set start)

                // *** End programmer edit section *** (Заказ.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (Заказ.Товары Set end)

                // *** End programmer edit section *** (Заказ.Товары Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.Kursovaya.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.Kursovaya.Заказ));
                }
            }
        }
    }
}
