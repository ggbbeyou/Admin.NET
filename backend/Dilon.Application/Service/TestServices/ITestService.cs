﻿using Dilon.Core;
using Furion.DatabaseAccessor;

namespace Dilon.Application
{
    public interface ITestService
        : IBaseService<long, Test, TestEntityOutputDto, TestAddInputDto, TestUpdateInputDto, TestPageListInputDto, MasterDbContextLocator>
    {

    }
}